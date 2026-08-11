"use client";

import { useEffect, useMemo, useState } from "react";

type CuratorProfile = {
  id: string;
  code: string;
  name: string;
  role: string;
  focus: string;
  experience: string;
  languages: string;
  shortDescription: string;
  profileSummary: string;
  services: Array<{
    title: string;
    description: string;
  }>;
  availability: string;
};

const curators: CuratorProfile[] = [
  {
    id: "hotel-support",
    code: "01",
    name: "ФИО куратора",
    role: "Куратор по размещению и отелю",
    focus: "Заселение, номера, связь с администрацией отеля",
    experience: "Временное поле: опыт уточняется",
    languages: "Временное поле: языки уточняются",
    shortDescription:
      "Помогает паломникам спокойно пройти заселение, решить бытовые вопросы в отеле и держит связь с группой на месте.",
    profileSummary:
      "Этот профиль подготовлен как структура для реального куратора. После подтверждения данных сюда можно добавить фото, полное имя, стаж сопровождения и языки общения.",
    services: [
      {
        title: "Размещение и отель",
        description:
          "Помощь при заселении, распределении номеров, ориентации в отеле и связи с ответственными службами.",
      },
      {
        title: "Бытовые вопросы",
        description:
          "Подсказки по распорядку, месту встречи группы и аккуратная передача срочных просьб организаторам.",
      },
    ],
    availability: "Контактные часы и номер будут добавлены после утверждения.",
  },
  {
    id: "meal-care",
    code: "02",
    name: "ФИО куратора",
    role: "Куратор по питанию и бытовой поддержке",
    focus: "Питание, ежедневный распорядок, бытовые запросы",
    experience: "Временное поле: опыт уточняется",
    languages: "Временное поле: языки уточняются",
    shortDescription:
      "Следит, чтобы паломники понимали график питания, знали, куда обращаться с бытовыми вопросами, и не оставались без поддержки.",
    profileSummary:
      "Здесь будет подробное описание реального сотрудника: с чем помогает, когда доступен и какие вопросы лучше передавать через него.",
    services: [
      {
        title: "Питание",
        description:
          "Ориентация по графику, месту питания и организационным изменениям во время поездки.",
      },
      {
        title: "Бытовая координация",
        description:
          "Помощь с повседневными вопросами, передачей запросов и спокойным разъяснением порядка действий.",
      },
    ],
    availability: "График дежурств будет добавлен после подтверждения.",
  },
  {
    id: "pilgrimage-route",
    code: "03",
    name: "ФИО куратора",
    role: "Куратор сопровождения во время паломничества",
    focus: "Сбор группы, маршруты, своевременное сопровождение",
    experience: "Временное поле: опыт уточняется",
    languages: "Временное поле: языки уточняются",
    shortDescription:
      "Помогает группе двигаться по маршруту организованно: напоминает о времени сбора, сопровождает переходы и уточняет текущие инструкции.",
    profileSummary:
      "Профиль предназначен для сотрудника, который сопровождает паломников на ключевых этапах программы и помогает сохранить ясность в движении группы.",
    services: [
      {
        title: "Сопровождение",
        description:
          "Координация группы во время перемещений, встреч и этапов программы.",
      },
      {
        title: "Организация на месте",
        description:
          "Разъяснение времени сбора, точки встречи и последовательности действий.",
      },
    ],
    availability: "Точки связи на маршруте будут добавлены позже.",
  },
  {
    id: "spiritual-organization",
    code: "04",
    name: "ФИО куратора",
    role: "Куратор духовной и организационной консультации",
    focus: "Спокойные разъяснения, вопросы программы, поддержка группы",
    experience: "Временное поле: опыт уточняется",
    languages: "Временное поле: языки уточняются",
    shortDescription:
      "Помогает паломникам разобраться в организационных вопросах и получить бережную консультацию в рамках программы поездки.",
    profileSummary:
      "После утверждения реального куратора в этом профиле можно указать его специализацию, опыт консультаций и формат общения с паломниками.",
    services: [
      {
        title: "Духовно-организационная консультация",
        description:
          "Бережные разъяснения по программе и передача вопросов ответственным специалистам, если требуется отдельное решение.",
      },
      {
        title: "Поддержка паломников",
        description:
          "Помощь в спокойной ориентации на месте, когда важно быстро понять, к кому и с чем обратиться.",
      },
    ],
    availability: "Формат консультаций будет уточнен командой Labbayk Tour.",
  },
];

const supportAreas = [
  "Размещение и отель",
  "Питание и бытовые вопросы",
  "Сопровождение во время паломничества",
  "Духовная и организационная консультация",
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedCurator = useMemo(
    () => curators.find((curator) => curator.id === selectedId) ?? null,
    [selectedId],
  );

  useEffect(() => {
    if (!selectedCurator) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCurator]);

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Навигация по сайту">
        <a className="brand" href="#top" aria-label="Labbayk Tour">
          <span className="brand-mark">LT</span>
          <span>
            <strong>Labbayk Tour</strong>
            <small>каталог кураторов</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Разделы сайта">
          <a href="#role">Роль кураторов</a>
          <a href="#curators">Каталог</a>
          <a href="https://www.instagram.com/labbayktour/">Instagram</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Для паломников Labbayk Tour</p>
          <h1>Кураторы Labbayk Tour</h1>
          <p className="hero-copy">
            Куратор помогает паломнику чувствовать себя увереннее на месте:
            объясняет порядок действий, помогает с размещением, бытовыми
            вопросами, сопровождением и организационной консультацией.
          </p>
          <div className="hero-actions" aria-label="Основные действия">
            <a className="primary-action" href="#curators">
              Смотреть каталог
            </a>
            <a
              className="secondary-action"
              href="https://www.instagram.com/labbayktour/"
            >
              @labbayktour
            </a>
          </div>
          <p className="source-note">
            Данные кураторов ниже временные: публично подтвержденные ФИО, фото,
            опыт и языки не найдены в доступном Instagram-предпросмотре.
          </p>
        </div>
      </section>

      <section className="role-section" id="role" aria-labelledby="role-title">
        <div className="section-heading">
          <p className="eyebrow">Зачем нужен куратор</p>
          <h2 id="role-title">Один понятный контакт рядом с паломником</h2>
          <p>
            Каталог помогает заранее увидеть, к кому обратиться по конкретному
            вопросу. У каждого куратора можно показать роль, опыт, языки и
            зону ответственности на месте.
          </p>
        </div>
        <div className="support-grid">
          {supportAreas.map((area, index) => (
            <article className="support-card" key={area}>
              <span className="support-index">0{index + 1}</span>
              <h3>{area}</h3>
              <p>
                Направление помощи, которое можно закрепить за конкретным
                куратором после подтверждения команды.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="curators-section"
        id="curators"
        aria-labelledby="curators-title"
      >
        <div className="section-heading compact-heading">
          <p className="eyebrow">Временная структура каталога</p>
          <h2 id="curators-title">Карточки кураторов</h2>
          <p>
            Эти профили показывают будущий формат карточек. Реальные данные
            можно заменить без изменения структуры сайта.
          </p>
        </div>

        <div className="curator-grid">
          {curators.map((curator) => (
            <article className="curator-card" key={curator.id}>
              <div className="photo-placeholder" aria-label="Фото куратора">
                <span>LT</span>
                <small>Фото будет добавлено</small>
              </div>
              <div className="card-body">
                <span className="status-pill">Временные данные</span>
                <h3>{curator.name}</h3>
                <p className="role">{curator.role}</p>
                <dl className="facts">
                  <div>
                    <dt>Специализация</dt>
                    <dd>{curator.focus}</dd>
                  </div>
                  <div>
                    <dt>Опыт</dt>
                    <dd>{curator.experience}</dd>
                  </div>
                  <div>
                    <dt>Языки</dt>
                    <dd>{curator.languages}</dd>
                  </div>
                </dl>
                <p className="description">{curator.shortDescription}</p>
                <button
                  className="profile-button"
                  type="button"
                  onClick={() => setSelectedId(curator.id)}
                >
                  Открыть профиль
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="replacement-note" aria-label="Замена данных">
        <div>
          <p className="eyebrow">Готово к наполнению</p>
          <h2>Когда появятся реальные данные</h2>
        </div>
        <p>
          В карточки нужно будет добавить фото, ФИО, роль, опыт, языки,
          описание помощи и контакты дежурства. Сейчас сайт намеренно не
          придумывает персональные данные кураторов.
        </p>
      </section>

      <footer className="footer">
        <span>Labbayk Tour</span>
        <a href="https://www.instagram.com/labbayktour/">
          instagram.com/labbayktour
        </a>
      </footer>

      {selectedCurator ? (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedId(null);
            }
          }}
        >
          <section
            className="profile-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
          >
            <button
              className="close-button"
              type="button"
              aria-label="Закрыть профиль"
              onClick={() => setSelectedId(null)}
            >
              ×
            </button>
            <div className="modal-head">
              <div className="modal-photo">
                <span>LT</span>
                <small>Фото куратора</small>
              </div>
              <div>
                <span className="status-pill">Временный профиль</span>
                <h2 id="profile-title">{selectedCurator.name}</h2>
                <p>{selectedCurator.role}</p>
              </div>
            </div>

            <div className="modal-content">
              <div className="modal-summary">
                <h3>Кратко о кураторе</h3>
                <p>{selectedCurator.profileSummary}</p>
                <dl className="facts detailed">
                  <div>
                    <dt>Специализация</dt>
                    <dd>{selectedCurator.focus}</dd>
                  </div>
                  <div>
                    <dt>Опыт</dt>
                    <dd>{selectedCurator.experience}</dd>
                  </div>
                  <div>
                    <dt>Языки</dt>
                    <dd>{selectedCurator.languages}</dd>
                  </div>
                  <div>
                    <dt>Доступность</dt>
                    <dd>{selectedCurator.availability}</dd>
                  </div>
                </dl>
              </div>
              <div className="modal-services">
                <h3>С чем помогает на месте</h3>
                <ul>
                  {selectedCurator.services.map((service) => (
                    <li key={service.title}>
                      <strong>{service.title}</strong>
                      <span>{service.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
