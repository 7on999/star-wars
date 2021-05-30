import ErrorIndicator from "./errorIndicator/errorIndicator";
import React from 'react';

export default class ErrorBoundary extends React.Component {

    state={
      hasError: false,
    }
    
    componentDidCatch() {
      this.setState({
        hasError: true
      })
    }
    
    render() {
        if (this.state.hasError){
            return <ErrorIndicator/>
        }

      return (
        this.props.children
         )
      }
    }