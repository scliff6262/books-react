class BooksController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @books = Book.all
    respond_to do |f|
      f.json { render json: @books }
      f.html { render @books }
    end
  end

  def show
    @book = Book.find(params[:id])
    respond_to do |f|
      f.json { render json: @book }
    end
  end

  def create
    @book = Book.find_or_create_by(book_params)
    if @book
      respond_to do |f|
        f.json { render json: @book }
      end
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
    respond_to do |f|
      f.json { render json: @book}
    end
  end

  private

  def book_params
    params.require(:book).permit(:author, :title, :img_link, :buy_link)
  end

end
