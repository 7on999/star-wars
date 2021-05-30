import React from 'react';
import ErrorBoundary from './error-boundary';

const Row = ({left, rigth})=>{
    return (
        <div className="row mb2">
            <div className="col-md-6">
            <ErrorBoundary>
               {left}
            </ErrorBoundary>
            </div>
            <div className="col-md-6">
            <ErrorBoundary>
                {rigth}
            </ErrorBoundary>
            </div>
      </div>
    )
}

export default Row;