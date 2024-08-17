interface IMovieLogo {
  url?: string | null;
}

export const MovieLogo: React.FC<IMovieLogo> = ({ url }) => {
  return (
    <>
      {url && <img src={url} width='fit-content' height='fit-content' />}
    </>
  )
}