import { getSortedPostsData } from "api/posts";
import type { GetStaticProps, NextPage } from "next";
import styled from "styled-components";

import Head from "next/head";
import Link from "next/link";

import Date from "components/Date";
import Layout, { siteTitle } from "components/Layout";

type HomeProps = {
  allPostsData: Array<{
    id: string;
    date: string;
    title: string;
  }>;
};
const Home: NextPage<HomeProps> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <StyledDiv>
        <StyledSection className="headingMd">
          <p>Hi there. This blog is under construction.</p>
        </StyledSection>
        <StyledSection className={`headingMd padding1px`}>
          <h2 className="headingLg">Blog</h2>
          <ul className="list">
            {allPostsData.map(({ id, date, title }) => (
              <li className="listItem" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className="lightText">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </StyledSection>
      </StyledDiv>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const StyledSection = styled.section`
  .heading2Xl {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }

  .headingXl {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }

  .headingLg {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
  }

  .headingMd {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .borderCircle {
    border-radius: 9999px;
  }

  .colorInherit {
    color: inherit;
  }

  .padding1px {
    padding-top: 1px;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .listItem {
    margin: 0 0 1.25rem;
  }

  .lightText {
    color: #666;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
