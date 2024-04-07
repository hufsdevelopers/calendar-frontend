import Button from '@/components/common/Button';
import {
  ChangeCalendarButton,
  IntroduceButton,
  CalendarSubtitle,
  CalendarTitle,
  ContentInnerSection,
} from '@/app/subscription/page.styles';

interface AppleCalendarGuideProps {
  cn: string;
  ct: string;
  calendarChangeToggle: () => void;
}

const AppleCalendarGuide = ({ cn, ct, calendarChangeToggle }: AppleCalendarGuideProps) => {
  return (
    <ContentInnerSection>
      <IntroduceButton>마지막 단계에요</IntroduceButton>
      <CalendarTitle>내 캘린더 앱에 추가</CalendarTitle>
      <CalendarSubtitle>
        주문한 일정을 캘린더에 추가할 수 있는 링크를 생성했어요.
        <br />
        아래의 캘린더 앱에서 열기 버튼을 누르면 추가할 수 있어요.
      </CalendarSubtitle>
      <a
        style={{ width: '100%', maxWidth: '393px' }}
        href={`webcal://api.calguksu.com/calendars/${cn}/subscribe?token=${ct}`}
        target="_blank"
      >
        <Button style={{ marginTop: '80px', width: '100%' }}>캘린더 앱에서 열기</Button>
      </a>
      <ChangeCalendarButton onClick={() => calendarChangeToggle()}>
        구글 캘린더를 사용하고 계신가요?
      </ChangeCalendarButton>
    </ContentInnerSection>
  );
};

export default AppleCalendarGuide;
