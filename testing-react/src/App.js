import React, { Component } from "react";
import Header from "./components/header/index";
import HeadLine from "./components/headline/index";
import SharedButton from "./components/button/index";
import ListItem from "./components/listItem/index";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";

const tempArray = [
  {
    fName: "jone",
    lName: "blogs",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }
  
  render() {
    const configButton = {
      buttonText: "Get posts",
      emitEvent: fetch,
    };

    const { posts } = this.props;

    return (
      <div>
        <Header />
        <section className="main">
          <HeadLine
            header="Hello, header"
            desc="click the button to render posts!"
            tempArray={tempArray}
          />
        </section>
        <section>
          <SharedButton {...configButton}></SharedButton>
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem}></ListItem>;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
