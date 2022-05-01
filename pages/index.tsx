import { gql } from "@apollo/client";
import apolloClient from "@lib/apolloClient";
import type { NextPage } from "next";

export async function getServerSideProps() {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query {
          listUsers {
            id
            name
          }
        }
      `,
    });

    return {
      props: {
        users: data.listUsers,
      },
    };
  } catch (e) {
    console.log("error");
    return {
      props: {
        users: [],
      },
    };
  }
}

const Home: NextPage<{ users: any }> = ({ users }) => {
  console.log(users);
  return <>Hello Next.js</>;
};

export default Home;
