type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag,
}
type RecordItem = {
    tags: string[]
    type: string
    notes: string
    amount: number
    createdAt?: string
}

type  Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => string
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void

}