const regExp = /<iframe.*>.*<\/iframe>/g

export const getVideoPlayer = async (name?: string, year?: number, kpId?: number): Promise<string> => {
  if (name && year && kpId) {

    try {
      const result = await fetch(
        `//pleer.videoplayers.club/get_player?w=610%&h=370&type=widget&players=videocdn,apicollaps,hdvb,alloha,kodik,iframe,trailer,torrent&bt_s=b_r:6;b_h:40;b_w:100;b_c:F6FF58;b_bg:428BCA;b_f:11;&kp_id=${kpId}&data_title=${name}&year=${year}&tti=AIzaSyAAWctSBmXp8fr8cQ7I80tCDGbI6OxAQ9A`
      )

      const text = await result.text()
      const scriptHtml = text.match(regExp)

      if (scriptHtml) {
        return Promise.resolve(scriptHtml[1])
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return Promise.reject('')
}