{
	globalSettings: {
		courseName: "",						// name of course
		courseDescription: "",				// brief overview of the course
		categories: ["weeks", "themes"],	// way the course is organized
		categoriesNumber: 0,				// # of weeks / themes for course 
	},

	outcomes: [
		{
			id: 0,
			outcome: ""
		},
		{
			id: 1,
			outcome: ""
		}
		{
			id: 2,
			parentOutcomeId: 0,
			outcome: ""
		}
		{
			id: 3,
			parentOutcomeId: 1,
			outcome: ""
		}
	],

	sessions: [
		{
			id: 0,
			outcomes: [2, 3],
			activities: [1, 3],
			assessments: [0, 2],
		},
	]

	activities: [
		{
			id: 0,
			name: "",
			description: ""
		}
	]

	assessments: [
		{
			id: 0,
			name: "",
			description: ""
		}
	]

	instructors: [
		{
			id: 0,
			name: "",
			title: ["Professor","Instructor","Teaching Assistant"],
			degrees: [],
			contactInformation: [
				{
					type: "phone",
					label: "",
					contact: ""
				},
				{
					type: "email",
					label: "",
					contact: ""
				},
				{
					type: "address",
					label: "",
					contact: ""
				}
			],
		}
	]
}