import IneIcon from '@/assets/artists/isd/ine.png';
import JingBurgerIcon from '@/assets/artists/isd/jingburger.png';
import LilpaIcon from '@/assets/artists/isd/lilpa.png';
import JururuIcon from '@/assets/artists/isd/jururu.png';
import GoseguIcon from '@/assets/artists/isd/gosegu.png';
import ViichanIcon from '@/assets/artists/isd/viichan.png';

export function artistsIcon(value: string) {
  switch (value) {
    case 'ine':
      return { icon: IneIcon.src };
    case 'jingburger':
      return { icon: JingBurgerIcon.src };
    case 'lilpa':
      return { icon: LilpaIcon.src };
    case 'jururu':
      return { icon: JururuIcon.src };
    case 'gosegu':
      return { icon: GoseguIcon.src };
    case 'viichan':
      return { icon: ViichanIcon.src };
    default:
      return { icon: '' };
  }
}
