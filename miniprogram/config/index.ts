interface Iconfig {
  api_base_url: string,
  toast_duration: number,
}

const config: Iconfig =  {
  api_base_url: 'https://tea.trustai.cn/trust/high/additional/api/v1',
  toast_duration: 1500,
}

export { config }