export type Theme = 'dark' | 'light'

export type TProject = {
    title: string,
    description: string,
    image: string,
    github?: string,
    languages: string[],
}

export type TimeLineDate = {
    date: string,
    width?: string,
    height?: string,
    fontSize?: string,
}