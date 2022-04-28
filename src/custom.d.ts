type RecordItem = {
    tags: string[]
    type: string
    notes: string
    amount: number
    createdAt?: Date
}
interface Window{
    tagList:Tag[]
    createTag:(name:string)=>void
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