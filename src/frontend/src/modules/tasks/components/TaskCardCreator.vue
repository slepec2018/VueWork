<template>
  <div
    ref="dialog"
    class="task-card"
    tabindex="0"
    @click.self="closeDialog"
    @keydown.esc="closeDialog"
  >
    <section class="task-card__wrapper">
      <button
        class="task-card__close"
        type="button"
        @click="closeDialog"
      />

      <div class="task-card__block">
        <div class="task-card__row">
          <input
            v-model="task.title"
            type="text"
            name="task_name"
            class="task-card__name"
            :class="{ 'task-card__name--min': taskToEdit }"
            max="37"
          />

          <a
            v-if="taskToEdit"
            class="task-card__edit task-card__edit--red"
            @click="removeTask"
          >
            Удалить Задачу
          </a>

          <span
            v-if="validations.title.error"
            class="task-card__error-text"
          >
            {{ validations.title.error }}
          </span>
        </div>
      </div>

      <div class="task-card__status">
        <h4 class="task-card__title">
          Выберите статус:
        </h4>

        <ul class="meta-filter task-card__meta">
          <li
            v-for="({ value, label }) in statusList"
            :key="value"
            class="meta-filter__item"
            :class="{ active: value === taskStatuses[task.statusId]}"
            @click="setStatus(value)"
          >
            <a
              class="meta-filter__status"
              :class="`meta-filter__status--${value}`"
              :title="label"
            />
          </li>
        </ul>
      </div>

      <div
        v-if="task.id"
        class="task-card__block"
      >
        <p class="task-card__date">
          {{ $taskCardDate }}
        </p>
      </div>

      <div class="task-card__block">
        <ul class="task-card__params">
          <TaskCardCreatorUserSelector v-model="task.userId" />
          <TaskCardCreatorDueDateSelector v-model="task.dueDate" />
        </ul>
      </div>

      <div class="task-card__block">
        <div class="task-card__description">
          <h4 class="task-card__title">
            Описание
          </h4>
          <textarea
            v-model="task.description"
            name="task_description"
            placeholder="Добавьте описание к задаче"
          />
        </div>
      </div>

      <div class="task-card__block">
        <div class="task-card__links">
          <h4 class="task-card__title">
            Ссылки
          </h4>

          <div class="task-card__links-item">
            <input
              v-model="task.url"
              type="text"
              name="task_link_url"
              laceholder="Введите url"
            />
            <span
              v-if="validations.url.error"
              class="task-card__error-text"
            >
              {{ validations.url.error }}
            </span>
            <input
              v-model="task.urlDescription"
              type="text"
              name="task_link_desc"
              placeholder="Добавьте описание к ссылке"
            />
          </div>
        </div>
      </div>

      <div class="task-card__block">
        <TaskCardViewTicksList
          :ticks="task.ticks"
          @createTick="createTick"
          @updateTick="updateTick"
          @removeTick="removeTick"
        />
      </div>

      <div class="task-card__block">
        <TaskCardTags
          v-if="task.tags && task.tags.length"
          :tags="task.tags"
        />
      </div>

      <div class="task-card__buttons">
        <AppButton
          class="button--border"
          @click="closeDialog"
        >
          Отменить
        </AppButton>
        <AppButton
          class="button--primary"
          :class="{'button--disabled': !isFormValid}"
          :disabled="!isFormValid"
          @click="submit"
        >
          Сохранить
        </AppButton>
      </div>
    </section>
  </div>
</template>
   
<script>
import TaskCardCreatorUserSelector
from '@/modules/tasks/components/TaskCardCreatorUserSelector';
import TaskCardCreatorDueDateSelector
from '@/modules/tasks/components/TaskCardCreatorDueDateSelector';
import TaskCardViewTicksList
from '@/modules/tasks/components/TaskCardViewTicksList';
import TaskCardTags from '@/modules/tasks/components/TaskCardTags';
import { statuses } from '@/common/constants';
import { createUUIDv4, getTimeAgo } from '@/common/helpers';
import { mapActions, mapGetters } from 'vuex';
import validator from '@/common/mixins/validator';
import taskCardName from '@/common/mixins/taskCardName';
import { createNewDate } from '@/common/helpers';
import taskStatuses from '@/common/enums/taskStatuses';
import { cloneDeep } from 'lodash';


const createNewTask = () => ({
  userId: null,
  columnId: null,
  statusId: null,
  title: 'Название задачи',
  description: '',
  sortOrder: 0,
  dueDate: createNewDate(),
  url: '',
  urlDescription: '',
  ticks: [],
  tags: ''
});

const createNewTick = () => ({
  uuid: createUUIDv4(),
  taskId: null,
  text: '',
  done: false
});

export default {
  name: 'TaskCardCreator',
  components: {
    TaskCardCreatorUserSelector,
    TaskCardCreatorDueDateSelector,
    TaskCardViewTicksList,
    TaskCardTags
  },
  mixins: [validator, taskCardName],
  props: {
    taskToEdit: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      task: createNewTask(),
      validations: {
        title: {
          error: '',
          rules: ['required']
        },
        url: {
          error: '',
          rules: ['url']
        }
      },
      isFormValid: true,
      statusList: statuses.slice(0, 3),
      taskStatuses
    };
  },
  computed: {
    timeAgo() {
      return getTimeAgo(this.task?.dueDate);
    }
  },
  watch: {
    task: {
      deep: true,
      handler() {
        this.isFormValid = true;
      }
    }
  },
  created() {
    if (this.taskToEdit) {
      this.task = cloneDeep(this.taskToEdit);
    }
  },
  mounted() {
    this.$refs.dialog.focus();
  },
  methods: {
    ...mapActions('Tasks', {
      tasksPost: 'post',
      tasksPut: 'put',
      taskDelete: 'delete'
    }),
    ...mapActions('Ticks', {
      ticksPost: 'post',
      ticksPut: 'put',
      tickDelete: 'delete'
    }),
    async submit() {
      if (!this.$validateFields(this.task, this.validations)) {
        this.isFormValid = false;
        return;
      }
      let { ticks, ...rest } = this.task;
      let id = this.task.id;
      if (this.taskToEdit) {
        await this.tasksPut(rest);
      } else {
        const task = await this.tasksPost({
          ...rest,
          sortOrder: this.sidebarTasksCount
        });
        id = task.id;
      }
      // Note: submit all ticks with task id
      await this.submitTicks(id, ticks);
      let message = `Задача ${this.task.title}`;
      message += this.taskToEdit ? ' обновлена' : ' создана';
      this.$notifier.success(message);
      this.closeDialog();
    },
    async submitTicks(taskId, ticks) {
      const promises = ticks
        .map(tick => {
          if (!tick.text) {
            return;
          }
          delete tick.uuid;
          tick.taskId = taskId;
          return tick.id
            ? this.ticksPut(tick)
            : this.ticksPost(tick);
        });
      await Promise.all(promises);
    },
    createTick() {
      this.task.ticks = [...this.task.ticks, createNewTick()];
    },
    async updateTick(tick) {
      if (tick.id) {
        this.ticksPut(tick);
      } else {
        const index = this.task.ticks
          .findIndex(({ uuid }) => tick.uuid === uuid);
        if (~index) {
          this.task.ticks.splice(index, 1, tick);
        }
      }
    },
    async removeTick({ id, uuid }) {
      if (id) {
        await this.tickDelete(id);
        this.task.ticks = this.task.ticks.filter(tick => tick.id !== id);
      } else {
        this.task.ticks = this.task.ticks.filter(tick => tick.uuid !== uuid);
      }
    },
    async removeTask() {
      await this.taskDelete(this.taskToEdit?.id);
      this.$notifier.success('Задача удалена');
      this.$router.push('/').catch(() => {});
    },
    setStatus(status) {
      const [key] = Object.entries(taskStatuses)
        .find(([_, value]) => value === status);
      if (!this.task.statusId || this.task.statusId !== +key) {
        this.$set(this.task, 'statusId', +key);
      } else {
        this.$set(this.task, 'statusId', null);
      }
    },
    closeDialog() {
      this.$router.push('/');
    }
  }
};
</script>
   
<style lang="scss" scoped>
@import "~@/assets/scss/blocks/meta-filter.scss";
@import "~@/assets/scss/blocks/task-card.scss";

  .task-card__name {
  cursor: pointer;
  }
</style>