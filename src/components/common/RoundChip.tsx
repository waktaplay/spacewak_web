'use client';

import { grayScale, personalColor, secondary } from '@/styles/colors';
import Image from 'next/image';
import styled from 'styled-components';

import { TYPOGRAPHY } from '@/styles/typography';

export type TGroup = 'isd' | 'gocl' | 'goca'; // 추후 별도 관리 예정

const groupColor = {
  isd: secondary['pinkLight'], // 이세돌
  gocl: secondary['blueLight'], // 고클
  goca: secondary['orangeLight'], // 고카
};

const RoundChipWrapper = styled.div<{ group: TGroup }>`
  height: 38px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  background: ${grayScale[700]};
  border-radius: 70px;
  padding: 4px 10px 4px 4px;
  color: ${({ group }) => groupColor[group]};

  .close_icon {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

const IconWrapper = styled.div<{ artist: string }>`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  // 퍼스널 컬러가 없을 경우 gray800
  background: ${({ artist }) =>
    artist ? personalColor[artist] : grayScale[800]};
`;

const ArtistNameWrapper = styled.p`
  ${TYPOGRAPHY['bodyNormal1']}
`;

export interface IRoundChip {
  item: { icon: string; label: string; value: string; group: TGroup };
}

export default function RoundChip({
  item: { icon, label, value, group },
}: IRoundChip) {
  return (
    <RoundChipWrapper group={group}>
      <IconWrapper artist={value} title={label}>
        {icon && <Image src={icon} height={30} width={30} alt={value} />}
      </IconWrapper>
      <ArtistNameWrapper>{label}</ArtistNameWrapper>
    </RoundChipWrapper>
  );
}
