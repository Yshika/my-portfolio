import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom'
import Header from '../components/header';
import RouteArray from './_base';

const Routes = () => {
    return (
        <Switch>
            {RouteArray.map((item, index) => {
                const { route, title, Component, exact = true } = item || {};
                return <Route key={index} path={route} exact={exact}>
                    <>
                        <Helmet title={title} />
                        <Suspense fallback={() => <div>Loading...</div>}>
                            <div className="main-conatiner">
                                <div className="col-md-2 p-0">
                                    <Header />
                                </div>
                                <div className="col-md-10 p-4   ">
                                    <Component />
                                </div>
                            </div>
                        </Suspense>
                    </>
                </Route>
            })}
        </Switch>
    )
}

export default Routes
