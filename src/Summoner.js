import React from 'react';
import Link from './Link';

class Summoner extends React.Component {
    state = {
        name: ""
    };
    render() {
        return (
            <div className="w-1/5 float-left">
                <div className="w-full">
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="email"
                        placeholder="jane@example.com"
                        value={this.state.name}
                        onChange={(event) => {
                            this.setState({
                                name: event.target.value
                            });
                        }}
                    />
                </div>
                <Link
                    color="blue"
                    active={this.state.name !== ''}
                    href={"https://euw.op.gg/summoner/userName=" + this.state.name}
                >
                    OP.GG
                </Link>
                <Link
                    color="red"
                    active={this.state.name !== ''}
                    href={"https://www.masterypoints.com/player/" + this.state.name + "/euw"}
                >
                    Masterypoints
                </Link>
                <Link
                    color="orange"
                    active={this.state.name !== ''}
                    href={"https://www.masterypoints.com/player/" + this.state.name + "/euw"}
                >
                    Masterypoints
                </Link>
            </div>
        );
    }
}

export default Summoner;
