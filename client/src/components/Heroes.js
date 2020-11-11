import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag'; 
import { Query } from 'react-apollo'; 
import HeroItem from './HeroItem'
const HEROES_QUERY = gql`
    query HeroesQuery {
        heroes {
            id
            name
            image
            description
        }
    }
`;

export class Heroes extends Component {
    render() {
        return (
            <Fragment>
                <Query query={HEROES_QUERY}>
                    {({loading, error, data}) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) return console.log(error);
                        console.log(data); 
                        return <Fragment>
                            {data.heroes.map(hero => (
                  <HeroItem key={hero.id} hero={hero} />
                ))}
                        </Fragment>
                    }}
                </Query>
            </Fragment>
        )
    }
}

export default Heroes
