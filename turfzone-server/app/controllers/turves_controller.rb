class TurvesController < ApplicationController
    def index
        turves = Turf.all
        render json: turves, status: :ok
    end
end
