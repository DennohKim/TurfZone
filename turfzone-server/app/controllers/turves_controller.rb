class TurvesController < ApplicationController

    # skip_before_action :authorize, only: :index

    def index
        turves = Turf.all
        render json: turves, status: :ok
    end
end
