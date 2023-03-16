import React from 'react'

type Task = {
  id: number,
  title: string,
  state: unknown,
}

interface Props {
  task: Task,
  onArchiveTask(): void,
  onPinTask(): void
}

export default function Task({ task: { title } }: Props) {
  return (
    <div className='list-item'>
      <label htmlFor='title' aria-label={title}>
        <input type='text' value={title} readOnly={true} name='title' />
      </label>
    </div>
  )
}