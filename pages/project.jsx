import React from "react";

const Project = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        border: "0.2px solid white",
      }}
    >
      {/* {project.map((e, ind) => (
        <div
          key={e.id}
          style={{
            border: "0.4px solid whitesmoke",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
          }}
        >
          <p>{e.full_name}</p>
          <p>{e.language}</p>
          <p> stargazers: {e.stargazers_count}</p>
          <p>watchers: {e.watchers_count}</p>
          <p> visibility: {e.visibility}</p>
        </div>
      ))} */}
    </div>
  );
};

// export async function getServerSideProps(){
export async function getStaticProps() {
  const res = await fetch(
    "https://api.github.com/search/repositories?q=user:mdjawedh022+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data = await res.json();
  return {
    props: { data, name:"HEllo" },
  };
}
export default Project;
