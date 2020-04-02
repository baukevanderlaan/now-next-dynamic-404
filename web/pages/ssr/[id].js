export default ({title}) => <h1>{title}</h1>

export const getServerSideProps = async () => {
  return {
    props: {
      title: "SSR"
    },
  }
}