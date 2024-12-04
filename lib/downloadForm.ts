/**
 * 下載購物表單
 */
export function handleDownload() {
  const files = [
    { url: '/shop/form.pdf', filename: '琉漁小鋪購物表單.pdf' },
    { url: '/shop/form-2.doc', filename: '琉漁小鋪購物表單.doc' },
  ]

  files.forEach((file, index) => {
    // Note: 每個檔案間隔 1 秒下載
    setTimeout(() => {
      const link = document.createElement('a')
      link.href = file.url
      link.download = file.filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, index * 1000)
  })
}
