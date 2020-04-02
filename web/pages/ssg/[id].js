export default ({title}) => <h1>{title}</h1>

export const getStaticProps = async () => {
  return {
    props: {
      title: "SSG"
    },
  }
}

export const getStaticPaths = async () => {
  return { paths: [{ params: { id: "x" } }], fallback: false }
}