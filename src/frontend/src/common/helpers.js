import {
  MINUTE_IN_SEC,
  HOUR_IN_SEC,
  DAY_IN_SEC,
  MONTH_IN_SEC,
  YEAR_IN_SEC,
  TAG_SEPARATOR,
  DAY_IN_MILLISEC
} from '@/common/constants';
import timeStatuses from '@/common/enums/timeStatuses';
import taskStatuses from '@/common/enums/taskStatuses';

// Получение тегов из строки тегов.
export const getTagsArrayFromString = tags => {
  const array = tags.split(TAG_SEPARATOR);
  return array.slice(1, array.length);
};

// Нормализация статуса по времени.
export const getTimeStatus = dueDate => {
  if (!dueDate) {
    return '';
  }
  const currentTime = +new Date();
  const taskTime = Date.parse(dueDate);
  const timeDelta = taskTime - currentTime;
  if (timeDelta > DAY_IN_MILLISEC) {
    return '';
  }
  return timeDelta < 0 ? timeStatuses.deadline : timeStatuses.expired;
};

export const getTargetColumnTasks = (toColumnId, tasks) => {
  return tasks.filter(task => task.columnId === toColumnId);
};

// Нормализация задачи.
export const normalizeTask = task => {
  return {
    ...task,
    status: task.statusId ? taskStatuses[task.statusId] : '',
    timeStatus: getTimeStatus(task.dueDate)
  };
};

export const getReadableDate = date => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  return `${day}.${month + 1}.${year}`;
};

export const getTimeAgo = date => {
  if (!date) {
    return '... время не указано ...';
  }
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / YEAR_IN_SEC;
  function getString(number, pronounce) {
    return `${number} ${pronounce} назад`;
  }
  function getPronounce(number, single, pluralTwoFour, pluralFive) {
    return number === 1
      ? single
      : number > 1 && number < 5
        ? pluralTwoFour
        : pluralFive;
  }
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, 'год', 'года', 'лет');
    return getString(number, pronounce);
  }
  interval = seconds / MONTH_IN_SEC;
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, 'месяц', 'месяца', 'месяцев');
    return getString(number, pronounce);
  }
  interval = seconds / DAY_IN_SEC;
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, 'день', 'дня', 'дней');
    return getString(number, pronounce);
  }
  interval = seconds / HOUR_IN_SEC;
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, 'час', 'часа', 'часов');
    return getString(number, pronounce);
  }
  interval = seconds / MINUTE_IN_SEC;
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, 'минуту', 'минуты', 'минут');
    return getString(number, pronounce);
  }
  return 'сейчас';
};

export const createUUIDv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const createNewDate = () => {
  return new Date(new Date().setHours(23,59,59,999));
};