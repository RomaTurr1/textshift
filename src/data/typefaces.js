export const typefaces = [
  {
    id: 'inter',
    name: 'Inter',
    category: 'Гротеск',
    designer: 'Расмус Андерссон',
    year: 2017,
    license: 'SIL OFL 1.1',
    description:
      'Нейтральный гротеск, спроектированный для интерфейсов. Высокая высота строчных знаков и открытые формы обеспечивают читаемость в мелких кеглях на экране.',
  },
  {
    id: 'ibm-plex-sans',
    name: 'IBM Plex Sans',
    category: 'Гротеск',
    designer: 'Майк Аббинк, Bold Monday',
    year: 2017,
    license: 'SIL OFL 1.1',
    description:
      'Корпоративная гарнитура IBM, сочетающая инженерную строгость с гуманистическими деталями. Часть суперсемейства Plex с антиквой и моноширинным вариантом.',
  },
  {
    id: 'jetbrains-mono',
    name: 'JetBrains Mono',
    category: 'Моноширинный',
    designer: 'Филипп Нурулин, Константин Буленков',
    year: 2020,
    license: 'SIL OFL 1.1',
    description:
      'Моноширинный шрифт для работы с кодом. Увеличенная высота строчных, упрощённые формы знаков и поддержка лигатур снижают нагрузку на зрение.',
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    category: 'Антиква',
    designer: 'Клаус Эггерс Сёренсен',
    year: 2011,
    license: 'SIL OFL 1.1',
    description:
      'Контрастная антиква переходного типа, вдохновлённая европейской типографикой XVIII века. Предназначена для заголовков и крупных кеглей.',
  },
  {
    id: 'source-serif',
    name: 'Source Serif',
    category: 'Антиква',
    designer: 'Франк Грисхаммер',
    year: 2014,
    license: 'SIL OFL 1.1',
    description:
      'Антиква из семейства Adobe Source, основанная на традициях Пьера Симона Фурнье. Спокойный ритм и умеренный контраст подходят для длинных текстов.',
  },
];

export function findTypefaceById(id) {
  return typefaces.find((typeface) => typeface.id === id);
}
