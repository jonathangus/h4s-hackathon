import schedule from '../images/schedule.jpg'
import partnerTrack from '../images/partnerTrack.jpg'
import expo from '../images/expo.jpg'
import challenges from '../images/challenges.jpg'
import faq from '../images/faq.jpg'
import jury from '../images/jury.jpg'
import prizes from '../images/prizes.jpg'
import map from '../images/map.png'
import slack from '../images/slack.jpg'

export default [
  {
    title: 'Schedule',
    url: '/schedule',
    image: schedule,
  },
  {
    title: 'FAQ',
    url: '/faq',
    image: faq,
  },
  {
    title: 'Map',
    image: expo,
    externalUrl: map,
  },
  {
    title: 'Challenges',
    url: '/challenges',
    image: challenges,
  },
  {
    title: 'Partner Track',
    url: '/partner-track',
    image: partnerTrack,
  },
  {
    title: 'Hack Instructions',
    url: '/instructions',
  },

  {
    title: 'Prizes',
    url: '/prizes',
    image: prizes,
  },
  {
    title: 'Slack',
    externalUrl: 'https://hackforsweden.slack.com',
    image: slack,
  },

  {
    title: 'Jury',
    url: '/jury',
    image: jury,
  },

  {
    title: 'Resources',
    url: '/resources',
  },
]
