import { ReactNode } from "react"

interface ITagProps {
  children: ReactNode
}
export const Tag = (props: ITagProps) => <span className="my-2 bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-cyan-900 dark:text-cyan-300">{props.children}</span>