'use client';
import React, { useState } from 'react';

import FullyFlow from '@/components/common/FullyFlow';
import FullyFlowSection from '@/components/common/FullyFlow/FullyFlowSection';

import Header from '@/components/common/Header';
import ToastComponent from '@/components/common/Toast/ToastComponent';
import IntroduceSection from '@/components/IntroSection';
import ScheduleSection from '@/components/ScheduleSection';
import SubscribeSection from '@/components/SubscribeSection';
import CompleteSection from '@/components/CompleteSection';

import { GradientOval } from '@/styles/ui.styles';

export default function Home() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  return (<>
      <Header />
      <GradientOval />
      <FullyFlow>
        <FullyFlowSection><IntroduceSection /></FullyFlowSection>
        <FullyFlowSection>
          <ScheduleSection selectedCode={selectedCode} setSelectedCode={setSelectedCode} />
        </FullyFlowSection>
        <FullyFlowSection><SubscribeSection /></FullyFlowSection>
        <FullyFlowSection><CompleteSection /></FullyFlowSection>
      </FullyFlow>
      <ToastComponent />
    </>
  );
}