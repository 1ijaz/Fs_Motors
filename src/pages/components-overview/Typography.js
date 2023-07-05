// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

// project import
import ComponentSkeleton from './ComponentSkeleton';
// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const ComponentTypography = () => (
  <ComponentSkeleton>
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12} md={12}>
        <Stack spacing={3}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Dear [Team/Colleagues/FS Community],
          </Typography>
          <Typography variant="body1" color="text.secondary">
            I hope this message finds you well. As the CEO of FS Motors, I wanted to take a moment to connect with all of you and share some
            thoughts and updates regarding our journey together. First and foremost, I want to express my deepest gratitude for each and
            every one of you. Your dedication, talent, and relentless pursuit of excellence have been instrumental in making FS Motors the
            thriving community and powerful framework it is today. Together, we have accomplished incredible feats, pushing the boundaries
            of what is possible in web development and UI design. Reflecting on our journey so far, it is inspiring to see the impact we
            have had on countless developers and organizations worldwide. Our commitment to delivering exceptional user experiences through
            intuitive and customizable components has set us apart in the industry. We have empowered developers to build beautiful and
            responsive applications, and our work continues to shape the future of web development. In light of our past successes, it is
            crucial that we remain steadfast in our commitment to innovation and continuous improvement. The technology landscape is
            ever-evolving, and we must adapt and stay ahead of the curve to meet the evolving needs of our users. By embracing change and
            embracing new challenges, we will continue to be leaders in the industry. I am incredibly proud of the diverse and talented team
            we have assembled here at FS Motors. Your passion, creativity, and collaborative spirit are what fuel our progress and enable us
            to overcome any obstacle. Together, we have created a culture of openness, respect, and inclusivity, which forms the bedrock of
            our success. Let us continue to foster an environment where every voice is heard and every contribution is valued. Looking
            ahead, I am excited about the opportunities that lie before us. We have ambitious plans for expanding our product offerings,
            enhancing our documentation and learning resources, and deepening our engagement with the developer community. I am confident
            that with our collective efforts, we will achieve even greater milestones and impact in the months and years to come. As we move
            forward, let us remember our core values: excellence, collaboration, and innovation. Let us embrace challenges as opportunities
            for growth and continue to push the boundaries of what is possible. Together, we will shape the future of web development and
            empower developers across the globe. Thank you for your unwavering dedication and for being an integral part of the FS Motors
            family. I am truly honored to work alongside each and every one of you. Wishing you continued success and fulfillment in all
            your endeavors.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Warm regards, [Hamza Khan] CEO, FS Motors
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  </ComponentSkeleton>
);

export default ComponentTypography;
