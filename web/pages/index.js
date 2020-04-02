import Link from 'next/link'

export default () => (
<div>
  <Link href="/ssg/[id]" as={`/ssg/x`}>
    <a>Link to SSG page</a>
  </Link>
  <br/>
  <Link href="/ssr/[id]" as={`/ssr/x`}>
  <a>Link to SSR page</a>
  </Link>
</div>
)