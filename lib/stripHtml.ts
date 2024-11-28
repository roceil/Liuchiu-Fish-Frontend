/**
 * 清除 HTML 標籤
 * @param html - HTML 字串
 * @returns 清除 HTML 標籤後的文字
 */
export function stripHtml(html: string) {
  if (typeof window !== 'undefined') {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || ''
  }
  return html
}
