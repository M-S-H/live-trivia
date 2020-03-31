defmodule LiveTrivia.Repo do
  use Ecto.Repo,
    otp_app: :live_trivia,
    adapter: Ecto.Adapters.Postgres
end
