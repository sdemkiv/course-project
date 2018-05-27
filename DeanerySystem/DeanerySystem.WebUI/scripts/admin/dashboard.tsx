﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';

interface StatisticsTileProps {
	name: string,
	count: number,
	link: string,
	colorClass: string,
	iconClass: string
}

class StatisticsTile extends React.Component<StatisticsTileProps, any> {
	constructor(props) {
		super(props);
	}

	render() {
		const tileClasses = `dashboard-stat dashboard-stat-v2 ${this.props.colorClass}`;
		const iconClasses = `fa ${this.props.iconClass}`;

		return (
			<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<a className={tileClasses} href={this.props.link} >
					<div className="visual">
						<i className={iconClasses}></i>
					</div>
					<div className="details">
						<div className="number">
							<span className="counter">{this.props.count}</span>
						</div>
						<div className="desc">{this.props.name}</div>
					</div>
				</a>
			</div>
		);
	}
}

class Dashboard extends React.Component {
	renderStatisticsTile(props: StatisticsTileProps) {
		return <StatisticsTile
			name={props.name}
			count={props.count}
			link={props.link}
			colorClass={props.colorClass}
			iconClass={props.iconClass}
		/>;
	}

	render() {
		return (
			<div className="row">
				{this.renderStatisticsTile({
					name: "Факультети",
					count: 5, //universityStatistics.FacultiesCount,
					link: "#",
					colorClass: "blue",
					iconClass: "fa-university"
				})}
				{this.renderStatisticsTile({
					name: "Потоки",
					count: 12, //universityStatistics.StreamsCount,
					link: "#",
					colorClass: "red",
					iconClass: "fa-graduation-cap"
				})}
				{this.renderStatisticsTile({
					name: "Кафедри",
					count: 28, //universityStatistics.DepartmentsCount,
					link: "#",
					colorClass: "green",
					iconClass: "fa-cubes"
				})}
				{this.renderStatisticsTile({
					name: "Групи",
					count: 56, //universityStatistics.GroupsCount,
					link: "#",
					colorClass: "purple",
					iconClass: "fa-users"
				})}
				{this.renderStatisticsTile({
					name: "Викладачі",
					count: 199, //universityStatistics.ProfessorsCount,
					link: "#",
					colorClass: "green-meadow",
					iconClass: "fa-briefcase"
				})}
				{this.renderStatisticsTile({
					name: "Студенти",
					count: 548, //universityStatistics.StudentsCount,
					link: "#",
					colorClass: "yellow-crusta",
					iconClass: "fa-child"
				})}
			</div>
		);
	}
}

ReactDOM.render(
	<Dashboard />,
    $('#dashboard')[0]
);
