import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { BadgeType } from '../../types/BadgeType'
import { Team } from '../../types/Team'
import DashboardTable from './DashboardTable'

describe('<DashboardTable />', () => {
    test('it should mount', () => {
        render(<DashboardTable teams={mockTeams} />)

        const dashboardTable = screen.getByTestId('DashboardTable')

        expect(dashboardTable).toBeInTheDocument()
    })
})

const mockTeams: Team[] = [
    {
        name: 'Team A',
        problems: [
            {
                badgeUrl: BadgeType.SHELTER_BADGE,
                description: '',
                name: 'Flood',
                score: 10,
                solved: true,
                mission: [
                    {
                        difficulty: 1,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '10',
                        solved: true
                    },
                    {
                        difficulty: 2,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: 'unlimited',
                        solved: true
                    },
                    {
                        difficulty: 3,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '0',
                        solved: true
                    }
                ]
            },
            {
                badgeUrl: BadgeType.NAVIGATION_BADGE,
                description: '',
                name: 'Drought',
                score: 10,
                solved: false,
                mission: [
                    {
                        difficulty: 2,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: 'unlimited',
                        solved: true
                    },
                    {
                        difficulty: 1,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '10',
                        solved: true
                    },
                    {
                        difficulty: 3,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '0',
                        solved: true
                    }
                ]
            },
            {
                badgeUrl: BadgeType.ALIEN_ENCOUNTER_BADGE,
                description: '',
                name: 'Meteor Impact',
                score: 10,
                solved: false,
                mission: [
                    {
                        difficulty: 3,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '0',
                        solved: true
                    },
                    {
                        difficulty: 1,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '10',
                        solved: true
                    },
                    {
                        difficulty: 2,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: 'unlimited',
                        solved: true
                    }
                ]
            }
        ],
        score: 5000
    },
    {
        name: 'Team B',
        problems: [
            {
                badgeUrl: BadgeType.SHELTER_BADGE,
                description: '',
                name: 'Flood',
                score: 10,
                solved: true,
                mission: [
                    {
                        difficulty: 1,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '10',
                        solved: null
                    },
                    {
                        difficulty: 2,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: 'unlimited',
                        solved: true
                    },
                    {
                        difficulty: 3,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '0',
                        solved: false
                    }
                ]
            },
            {
                badgeUrl: BadgeType.NAVIGATION_BADGE,
                description: '',
                name: 'Drought',
                score: 10,
                solved: false,
                mission: [
                    {
                        difficulty: 2,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: 'unlimited',
                        solved: true
                    },
                    {
                        difficulty: 1,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '10',
                        solved: null
                    },
                    {
                        difficulty: 3,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '0',
                        solved: false
                    }
                ]
            },
            {
                badgeUrl: BadgeType.ALIEN_ENCOUNTER_BADGE,
                description: '',
                name: 'Meteor Impact',
                score: 10,
                solved: false,
                mission: [
                    {
                        difficulty: 3,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '0',
                        solved: false
                    },
                    {
                        difficulty: 1,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '10',
                        solved: true
                    },
                    {
                        difficulty: 2,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: 'unlimited',
                        solved: false
                    }
                ]
            }
        ],
        score: 0
    },
    {
        name: 'Team C',
        problems: [
            {
                badgeUrl: BadgeType.SHELTER_BADGE,
                description: '',
                name: 'Flood',
                score: 10,
                solved: true,
                mission: [
                    {
                        difficulty: 1,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '10',
                        solved: null
                    },
                    {
                        difficulty: 2,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: 'unlimited',
                        solved: true
                    },
                    {
                        difficulty: 3,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '0',
                        solved: false
                    }
                ]
            },
            {
                badgeUrl: BadgeType.NAVIGATION_BADGE,
                description: '',
                name: 'Drought',
                score: 10,
                solved: false,
                mission: [
                    {
                        difficulty: 2,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: 'unlimited',
                        solved: true
                    },
                    {
                        difficulty: 1,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '10',
                        solved: null
                    },
                    {
                        difficulty: 3,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '0',
                        solved: false
                    }
                ]
            },
            {
                badgeUrl: BadgeType.ALIEN_ENCOUNTER_BADGE,
                description: '',
                name: 'Meteor Impact',
                score: 10,
                solved: false,
                mission: [
                    {
                        difficulty: 3,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '0',
                        solved: false
                    },
                    {
                        difficulty: 1,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: '10',
                        solved: null
                    },
                    {
                        difficulty: 2,
                        effect: '',
                        parameters: '',
                        name: '',
                        objective: '',
                        remainingAttempts: 'unlimited',
                        solved: true
                    }
                ]
            }
        ],
        score: 4950
    }
]
