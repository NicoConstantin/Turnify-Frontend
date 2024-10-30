import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <h1>{t('title')}</h1>
    </main>
  )
}
