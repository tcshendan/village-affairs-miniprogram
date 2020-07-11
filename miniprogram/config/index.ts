interface Iconfig {
  api_base_url: string,
  toast_duration: number,
}

const config: Iconfig =  {
  // api_base_url: 'https://tea.trustai.cn/trust/high/additional/api/v1',
  api_base_url: 'https://www.fastmock.site/mock/ef8ef895bc761a3ca2a60610c4514423/_village-affairs/api',
  toast_duration: 1500,
}

export { config }