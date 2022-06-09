@extends('layouts.app')

@section('content')


                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        
                        <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <i class="fe fe-user"></i>
                                                        </div>
                                                    </div>
                                                     <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email" autofocus>
                                                    @error('email')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
                                                    @if (session('status'))
                                                        <span class="valid-feedback" role="alert" style="display:block;">
                                                            {{ session('status') }}
                                                        </span>
                                                    @endif
                                                </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-3">
                                <button type="submit" class="btn btn-primary login-button btn-block px-4">
                                    {{ __('Reset') }}
                                </button>
                            </div>
                            <div class="col-12 text-center">
                                <a class="btn btn-link box-shadow-0 text-lg-color px-0" href="{{ route('login') }}" style="text-decoration: underline;">
                                    {{ __('Back To Login') }}
                                </a>
                            </div>
                        </div>
                    </form>
 
@endsection
