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

export type TWorkHistory = {
    title: string,
    company: string,
    desktopDate: string,
    mobileDates: string,
    description?: string,
    connector: boolean,
}