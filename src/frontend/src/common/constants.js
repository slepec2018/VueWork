// Все возможные статусы
export const statuses = [
  {
    label: 'Важно, не срочно',
    value: 'green'
  },
  {
    label: 'Срочно, не важно',
    value: 'orange'
  },
  {
    label: 'Срочно, важно',
    value: 'red'
  },
  {
    label: 'Дедлайн',
    value: 'time'
  },
  {
    label: 'Просрочено',
    value: 'alert'
  }
];

// Для работы с временем создания задачи и статусом по времени
export const SEC = 1000;
export const MINUTE_IN_SEC = 60;
export const HOUR_IN_SEC = MINUTE_IN_SEC * 60;
export const DAY_IN_SEC = HOUR_IN_SEC * 24;
export const DAY_IN_MILLISEC = DAY_IN_SEC * SEC;

export const MOVE = 'move';
export const TAG_SEPARATOR = '#';
export const DATA_TRANSFER_PAYLOAD = 'payload';