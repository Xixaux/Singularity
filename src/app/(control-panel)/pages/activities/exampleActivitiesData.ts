import { sub } from 'date-fns/sub';
import ActivityItemType from './ActivityItemType';

/**
 * The example activities data.
 */
const exampleActivitiesData: ActivityItemType[] = [
  {
    id: '493190c9-5b61-4912-afe5-78c21f1044d7',
    icon: 'star',
    description: 'Your new <strong>streaming equipment</strong> has been delivered! Schedule a setup session.',
    date: sub(new Date(), { minutes: 25 }),
    linkedContent: 'Schedule Setup',
    extraContent: `<div class="font-bold">Equipment Delivered!</div><br>
                  <div>Your new streaming camera and microphone have arrived. Contact the tech team to schedule installation and testing.</div>`,
  },
  {
    id: '6e3e97e5-effc-4fb7-b730-52a151f0b641',
    image: '/assets/images/avatars/male-04.jpg',
    description:
      '<strong>Jermaine Kirk</strong> invited you to join the <strong>LiveStream Elite</strong> team as a <strong>Content Strategist</strong>',
    date: sub(new Date(), { minutes: 50 }),
    linkedContent: 'Join LiveStream Elite Team',
    link: '/dashboards/streaming-control',
    useRouter: true,
  },
  {
    id: 'b91ccb58-b06c-413b-b389-87010e03a120',
    icon: 'email',
    description: 'You have 15 pending messages from sponsors and collaborators',
    date: sub(new Date(), { hours: 3 }),
    linkedContent: 'Check Messages',
    link: '/apps/streaming-inbox',
    useRouter: true,
  },
  {
    id: '541416c9-84a7-408a-8d74-27a43c38d797',
    icon: 'cloud-download',
    description: '<strong>Jess Carter</strong> sent you a <strong>raw video clip</strong> for your next stream',
    date: sub(new Date(), { hours: 5 }),
    linkedContent: 'Download Video Clip',
    link: '/assets/streaming-clips/raw-clip-2025-08-10',
    useRouter: true,
  },
  {
    id: 'ef7b95a7-8e8b-4616-9619-130d9533add9',
    image: '/assets/images/avatars/male-06.jpg',
    description: '<strong>Roger Murray</strong> added you as a collaborator on their streaming channel',
    date: sub(new Date(), { hours: 7 }),
    extraContent: `You share <span class="font-semibold">8</span> mutual streaming contacts.`,
  },
  {
    id: 'eb8aa470-635e-461d-88e1-23d9ea2a5665',
    image: '/assets/images/avatars/female-04.jpg',
    description: '<strong>Sophie Stone</strong> sent you feedback on your recent live stream',
    date: sub(new Date(), { hours: 9 }),
    linkedContent: 'View Feedback',
    link: '/apps/streaming-messages/5636c0ba-fa47-42ca-9160-27340583041e',
    useRouter: true,
  },
  {
    id: 'b85c2338-cc98-4140-bbf8-c226ce4e395e',
    icon: 'email',
    description: 'You received 3 new messages from your streaming team',
    date: sub(new Date(), { days: 1 }),
    extraContent: `<ol class="list-decimal list-inside space-y-2">
                      <li class="font-medium">Review the updated streaming schedule</li>
                      <li class="font-medium">Confirm guest appearance for next broadcast</li>
                      <li class="font-medium">Discuss sponsorship deal with brand</li>
                  </ol>`,
    linkedContent: 'Check Messages',
    link: '/apps/streaming-inbox',
    useRouter: true,
  },
  {
    id: 'fd0f01b4-f3de-4333-add5-cd86850279f8',
    image: '/assets/images/avatars/female-02.jpg',
    description: '<strong>Tina Harris</strong> invited you to a live stream collaboration',
    date: sub(new Date(), { days: 1 }),
    linkedContent: 'Join Collaboration Chat',
    link: '/apps/streaming-messenger/5636c0ba-fa47-42ca-9160-27340583041e',
    useRouter: true,
  },
  {
    id: '8f8e1bf9-4661-4939-9e43-390957b60f42',
    icon: 'task-alt',
    description:
      'Your interview slot with <strong>TechStream Podcast</strong> is confirmed! Prepare for the session in 2 days',
    date: sub(new Date(), { days: 3 }),
  },
  {
    id: '30af917b-7a6a-45d1-822f-9e7ad7f8bf69',
    icon: 'cloud-download',
    description: 'Your edited <strong>content creator reel</strong> is ready to download',
    date: sub(new Date(), { days: 4 }),
    linkedContent: 'Download Reel',
    link: '/assets/creator-reels',
    useRouter: true,
  },
  {
    id: 'a1b2c3d4-5e6f-7890-1234-56789abcdef0',
    icon: 'notifications',
    description: 'New analytics dashboard update available for your streaming channel',
    date: sub(new Date(), { hours: 12 }),
    linkedContent: 'Update Dashboard',
    link: '/settings/streaming-analytics',
    useRouter: true,
  },
  {
    id: 'b2c3d4e5-6f78-9012-3456-7890abcdef12',
    image: '/assets/images/avatars/female-03.jpg',
    description: '<strong>Aaron Madison</strong> shared a streaming analytics report with you',
    date: sub(new Date(), { days: 2 }),
    linkedContent: 'View Analytics Report',
    link: '/reports/streaming-analytics-123',
    useRouter: true,
  },
  {
    id: 'c3d4e5f6-7890-1234-5678-90abcdef1234',
    icon: 'assignment',
    description: 'Your <strong>Channel Branding Redesign</strong> task is due tomorrow',
    date: sub(new Date(), { hours: 15 }),
    linkedContent: 'View Task Details',
    link: '/tasks/channel-branding-redesign',
    useRouter: true,
  },
  {
    id: 'd4e5f6g7-8901-2345-6789-0abcdef12345',
    icon: 'sync',
    description: 'Streaming platform data sync completed successfully',
    date: sub(new Date(), { days: 5 }),
    extraContent: `<div class="font-bold">Sync Complete!</div><br>
                  <div>All streaming data has been synchronized across platforms. Check the logs for details.</div>`,
  },
];

export default exampleActivitiesData;