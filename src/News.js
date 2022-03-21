/** @format */

import React from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./App.css";
import ReactHtmlParser from "react-html-parser";

export default class ResultPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      results: [],
      keyword: "",
    };
  }

  handleKeyUp = (event) => {
    this.setState({ keyword: event.target.value });
  };

  componentDidMount() {
    const keyword = this.props.match.params.keyword;
    this.setState({ keyword: keyword });
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .get(
        `https://serpapi.com/search.json?engine=google&q=${keyword}&tbm=nws&location=India&api_key=35acacb8a9b9f679f9c9bcffdae6d19169b1ffe617b1aa9239001c5f98eaf1f1`,
        config
      )
      .then((res) => {
        const apiData = res.data;
        console.log(apiData);
        this.setState({ results: apiData });
      });
  }

  render() {
    if (this.state.results.length != 0) {
      return (
        <div>
          <Container>
            <Row>
              <Col
                style={{
                  marginTop: 20 + "px",
                  paddingTop: 20 + "px",
                  paddingBottom: 20 + "px",
                  border: 1 + "px solid rgb(230, 230, 230)",
                }}
                className='box-shadow'>
                Latest News
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  marginTop: 10 + "px",
                  paddingTop: 10 + "px",
                  paddingBottom: 10 + "px",
                }}>
                <p>
                  Showing Top 10 Results of{" "}
                  <b>{this.state.results.totalCount}</b> for{" "}
                  <i>
                    <b>{this.props.match.params.keyword}</b>
                  </i>
                </p>
              </Col>
            </Row>

            {this.state.results.value.map((value, key) => (
              <a className='search-result-anchor' href={value.url}>
                <Row>
                  <Col
                    style={{
                      marginTop: 20 + "px",
                      paddingTop: 20 + "px",
                      paddingBottom: 20 + "px",
                      border: 1 + "px solid rgb(230, 230, 230)",
                    }}>
                    <p
                      className='result-title'
                      dangerouslySetInnerHTML={{ __html: value.title }}
                    />
                    <p className='text-dec-none result-body'>{value.body}</p>
                  </Col>
                </Row>
              </a>
            ))}
          </Container>
        </div>
      );
    }
    return (
      <div>
        <Container>
          <Row>
            <Col
              style={{
                marginTop: 20 + "px",
                paddingTop: 20 + "px",
                paddingBottom: 20 + "px",
                border: 1 + "px solid rgb(230, 230, 230)",
              }}
              className='box-shadow'>
              Latest News
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                marginTop: 10 + "px",
                paddingTop: 10 + "px",
                paddingBottom: 10 + "px",
              }}>
              <p>
                Loading. Please Wait to See Latest News
                <i>
                  <b>{this.props.match.params.keyword}</b>
                </i>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
