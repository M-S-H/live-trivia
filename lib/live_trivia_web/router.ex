defmodule LiveTriviaWeb.Router do
  use LiveTriviaWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", LiveTriviaWeb do
    pipe_through :browser

    get "/*anything", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", LiveTriviaWeb do
  #   pipe_through :api
  # end
end
