import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

export * from '@testing-library/react'
export * from '@testing-library/jest-dom/extend-expect'
export { user }
