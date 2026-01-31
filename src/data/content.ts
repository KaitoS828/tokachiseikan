import type { NavItem, StrengthItem, WorkItem, CompanyInfo } from '@/types'

export const navItems: NavItem[] = [
  { label: 'コンセプト', href: '#concept' },
  { label: '強み', href: '#strength' },
  { label: '事業内容', href: '#works' },
  { label: '会社概要', href: '#company' },
  { label: 'お問い合わせ', href: '#contact' },
]

export const strengths: StrengthItem[] = [
  {
    num: '01',
    title: '業界屈指の爆速生産',
    desc: '他社が1日1,000〜2,000箱のところ、当社は1日3,000〜4,000箱を製造。自動製造機の早期導入により、漁期の爆発的な需要にも即座に対応します。',
  },
  {
    num: '02',
    title: '全員が職人の技術集団',
    desc: '代表を含む全スタッフが木材の特性を熟知したプロフェッショナル。設計・加工・組立をすべて自社で完結し、細かいサイズ指定にも外注なしで対応します。',
  },
  {
    num: '03',
    title: '廃棄物ゼロの循環型経営',
    desc: '水産木箱の製造時に出る端材を活用。原材料費を抑えた高品質な製品提供と、環境に優しいSDGsなビジネスモデルを実現しています。',
  },
]

export const works: WorkItem[] = [
  {
    title: '水産用木箱の製造',
    category: 'MAIN BUSINESS',
    image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80',
    desc: '十勝・釧路・日高エリアの水産物流を支える主力事業',
  },
  {
    title: '特注・OEM製造',
    category: 'CUSTOM ORDER',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    desc: '熟練職人による特注サイズ・特殊形状の木箱製造',
  },
  {
    title: 'ミニチュア木箱・雑貨',
    category: 'NEW BUSINESS',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    desc: '端材を活用した新商品開発で全国へ広尾を届ける',
  },
]

export const companyInfo: CompanyInfo[] = [
  { label: '会社名', value: '有限会社十勝製函' },
  { label: '代表者', value: '代表取締役 尾矢 利昭' },
  { label: '創業', value: '平成8年（1996年）' },
  { label: '所在地', value: '〒089-2622\n北海道広尾郡広尾町公園通南3丁目3番地30' },
  { label: '法人番号', value: '7460102006859' },
]

export const images = {
  hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  concept: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
  challenge: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  company: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
}
