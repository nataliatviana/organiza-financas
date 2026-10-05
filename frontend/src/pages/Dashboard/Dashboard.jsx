import {
  LayoutDashboard,
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  Tags,
  Plus,
  MoreHorizontal
} from 'lucide-react'

import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">O</div>
          <span>Organiza</span>
        </div>

        <nav className="menu">

          <a className="menu-item active">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>

          <a className="menu-item">
            <Wallet size={20} />
            <span>Gastos</span>
          </a>

          <a className="menu-item">
            <ArrowUpCircle size={20} />
            <span>Receitas</span>
          </a>

          <a className="menu-item">
            <Tags size={20} />
            <span>Categorias</span>
          </a>

        </nav>

        <div className="sidebar-footer">
          <p>OrganizaFinanças</p>
          <span>v1.0</span>
        </div>

      </aside>


      {/* CONTEÚDO PRINCIPAL */}
      <main className="main-content">

        {/* HEADER */}
        <header className="topbar">

          <div>
            <p className="greeting">Olá, Rebeca 👋</p>
            <h1>Visão geral</h1>
          </div>

          <button className="new-button">
            <Plus size={18} />
            Novo lançamento
          </button>

        </header>


        {/* RESUMO */}
        <section className="summary">

          <div className="summary-card main-card">

            <div className="card-top">
              <span>Saldo atual</span>
              <MoreHorizontal size={20} />
            </div>

            <strong>R$ 2.700,00</strong>

            <p>Disponível no período</p>

          </div>


          <div className="summary-card">

            <div className="card-icon income-icon">
              <ArrowUpCircle size={22} />
            </div>

            <span>Receitas</span>

            <strong>R$ 5.000,00</strong>

            <small>+ 12% este mês</small>

          </div>


          <div className="summary-card">

            <div className="card-icon expense-icon">
              <ArrowDownCircle size={22} />
            </div>

            <span>Despesas</span>

            <strong>R$ 2.300,00</strong>

            <small>- 8% este mês</small>

          </div>

        </section>


        {/* CONTEÚDO INFERIOR */}
        <section className="content-grid">

          {/* MOVIMENTAÇÕES */}
          <div className="panel movements-panel">

            <div className="panel-header">
              <div>
                <h2>Últimas movimentações</h2>
                <p>Confira os lançamentos recentes</p>
              </div>

              <button className="text-button">
                Ver todas
              </button>
            </div>


            <div className="movement-list">

              <div className="movement">

                <div className="movement-icon expense">
                  <ArrowDownCircle size={20} />
                </div>

                <div className="movement-info">
                  <strong>Compra de cosméticos</strong>
                  <span>Produtos • 02/10/2026</span>
                </div>

                <strong className="movement-value negative">
                  - R$ 350,00
                </strong>

              </div>


              <div className="movement">

                <div className="movement-icon expense">
                  <ArrowDownCircle size={20} />
                </div>

                <div className="movement-info">
                  <strong>Conta de energia</strong>
                  <span>Operacional • 01/10/2026</span>
                </div>

                <strong className="movement-value negative">
                  - R$ 180,00
                </strong>

              </div>


              <div className="movement">

                <div className="movement-icon income">
                  <ArrowUpCircle size={20} />
                </div>

                <div className="movement-info">
                  <strong>Atendimento</strong>
                  <span>Receita • 01/10/2026</span>
                </div>

                <strong className="movement-value positive">
                  + R$ 500,00
                </strong>

              </div>


              <div className="movement">

                <div className="movement-icon expense">
                  <ArrowDownCircle size={20} />
                </div>

                <div className="movement-info">
                  <strong>Materiais para unhas</strong>
                  <span>Materiais • 30/09/2026</span>
                </div>

                <strong className="movement-value negative">
                  - R$ 120,00
                </strong>

              </div>

            </div>

          </div>


          {/* CATEGORIAS */}
          <div className="panel categories-panel">

            <div className="panel-header">
              <div>
                <h2>Despesas por categoria</h2>
                <p>Onde seu dinheiro está indo</p>
              </div>
            </div>


            <div className="category">

              <div className="category-info">
                <span>Produtos</span>
                <strong>R$ 950,00</strong>
              </div>

              <div className="progress">
                <div style={{ width: '72%' }}></div>
              </div>

            </div>


            <div className="category">

              <div className="category-info">
                <span>Operacional</span>
                <strong>R$ 680,00</strong>
              </div>

              <div className="progress">
                <div style={{ width: '52%' }}></div>
              </div>

            </div>


            <div className="category">

              <div className="category-info">
                <span>Materiais</span>
                <strong>R$ 420,00</strong>
              </div>

              <div className="progress">
                <div style={{ width: '35%' }}></div>
              </div>

            </div>


            <div className="category">

              <div className="category-info">
                <span>Outros</span>
                <strong>R$ 250,00</strong>
              </div>

              <div className="progress">
                <div style={{ width: '20%' }}></div>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Dashboard