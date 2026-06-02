export const getExcerpt = (content: string, maxLength: number = 250) => {
    const plainText = content.replace(/<[^>]*>/g, '')
    if (plainText.length <= maxLength) return plainText
    return plainText.slice(0, maxLength).split(' ').slice(0, -1).join(' ') + '...'
}