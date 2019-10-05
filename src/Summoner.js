import React from 'react';
import Link from './Link';

class Summoner extends React.Component {
    state = {
        name: ""
    };
    render() {
        return (
            <div className="w-1/5 float-left p-2">
                <div className="my-1 w-full">
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
                    color="red"
                    active={this.state.name !== ''}
                    href={"https://euw.op.gg/summoner/userName=" + this.state.name}
                >
                    OP.GG
                </Link>
                <Link
                    color="orange"
                    active={this.state.name !== ''}
                    href={"https://www.masterypoints.com/player/" + this.state.name + "/euw"}
                >
                    Masterypoints
                </Link>
                <Link
                    color="yellow"
                    active={this.state.name !== ''}
                    href={"https://lol.mobalytics.gg/summoner/euw/" + this.state.name}
                >
                    Mobalytics
                </Link>
                <Link
                    color="green"
                    active={this.state.name !== ''}
                    href={"https://lolprofile.net/summoner/euw/" + this.state.name}
                >
                    LoL Profile
                </Link>
                <Link
                    color="teal"
                    active={this.state.name !== ''}
                    href={"https://www.leagueofgraphs.com/summoner/euw/" + this.state.name}
                >
                    League of Graphs
                </Link>
                <Link
                    color="blue"
                    active={this.state.name !== ''}
                    href={"https://www.leaguespy.net/search?region=NA&search=" + this.state.name}
                >
                    League Spy
                </Link>
                <Link
                    color="indigo"
                    active={this.state.name !== ''}
                    href={"http://lol-stats.net/en_GB/summoner?server=euw1&summoner=" + this.state.name}
                >
                    LoL Stats
                </Link>
                <Link
                    color="purple"
                    active={this.state.name !== ''}
                    href={"http://www.masteryprofiler.com/?region=euw&name=" + this.state.name}
                >
                    Mastery Profieler
                </Link>
                <Link
                    color="pink"
                    active={this.state.name !== ''}
                    href={"https://euw.poroscience.com/s/" + this.state.name}
                >
                    Poro Science
                </Link>
                <Link
                    color="orange"
                    active={this.state.name !== ''}
                    href={"http://quickfind.kassad.in/profile/euw/" + this.state.name}
                >
                    Quickfind
                </Link>
            </div>
        );
    }
}

export default Summoner;
