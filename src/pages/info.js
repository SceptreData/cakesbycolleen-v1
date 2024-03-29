import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page='info' bgColor={"inherit"}>
      <section className={infoStyles.info_blurb}>
        <h2 dangerouslySetInnerHTML={{ __html: infoData.description }}></h2>
        <p dangerouslySetInnerHTML={{ __html: infoData.cta }}></p>
        <ul>
          <li>
            <p>
              <a href={`mailto:${infoData.contact.email}`}>
                Email: {infoData.contact.email}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a
                href={`https://twitter.com/${infoData.contact.twitter_handle}`}
              >
                Twitter: @{infoData.contact.twitter_handle}
              </a>
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
