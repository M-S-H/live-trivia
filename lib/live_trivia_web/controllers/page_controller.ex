defmodule LiveTriviaWeb.PageController do
  use LiveTriviaWeb, :controller

  def index(conn, _params) do
    conn
    |> put_resp_header("content-type", "text/html; charset=utf-8")
    |> Plug.Conn.send_file(200, "priv/static/index.html")
    |> halt()
  end
end
