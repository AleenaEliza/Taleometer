<!-- Row -->
						<div class="row">
							<div class="col-md-12 wrapper wrapper-content">
								<div class="ibox card">
									<div class="card-body">
										<div class="ibox-content">
											<div class="row mb-3">
												<div class="col-md-12 col-lg-12">
													<div class="row">
														<div class="col-md-6">
															<div class="bg-light text-center br-4">
																<div class="p-2">
																	@if($posts->question_type=='image')
																	<img src="{{url($posts->question_media)}}" alt="img" class="img-fluid w-100">
																	@endif
																	@if($posts->question_type=='video')
																	<video class="img-fluid w-100" controls>
  <source src="{{url($posts->question_media)}}" id="video_here">
    Your browser does not support HTML5 video.
  </video>
																	@endif
																</div>
															</div>
														</div>
														<div class="col-md-6">
															<h3 class="mb-1">
																<a href="#" class="text-navy">
																	{{$posts->question}}
																</a>
															</h3>
															
															<div>
																
																@if($posts->answer_type=='text')
																<p>Answer: <span class="font-weight-bold fs-15">{{$posts->answer_text}}</span></p>
																@endif
																@if($posts->answer_type=='image')
																<p>Answer: </p><img id="" src="{{url($posts->answer_image)}}" alt="avatar" style="height: 150px;width:auto;" />
																@endif
															</div>
															<h4 class="mt-2">Total Comments:<span class="font-weight-bold fs-30">{{$comment_count}}</span></h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header">
										<div class="card-title">Comments</div>
									</div>
									<div class="card-body">
										
										@if(($comment_count>0) && (count($postcomments)>0))
										<div id="scroll" style="overflow-y:scroll;height: 400px;">
										@foreach($postcomments as $row)
										
										<div class="media mb-5 mt-0">
											<div class=" mr-3">
												<a href="#"> @if($row->user_type=='admin')<img class="media-object rounded-circle thumb-sm" alt="{{$row->users->fname}}" src="@if($row->users->avatar){{url($row->users->avatar)}}@else {{url('storage/app/public/taleologo.png')}} @endif">
												@else
													<img class="media-object rounded-circle thumb-sm" alt="{{$row->users->fname}}" src="@if($row->users->avatar){{url($row->users->avatar)}}@else {{url('storage/app/public/taleologo.png')}} @endif">
													@endif </a>
											</div>
											<div class="media-body">
												<h5 class="mt-0 mb-0">{{$row->users->fname." ".$row->users->lname}}</h5>
												
												<p class="font-13 text-muted mb-0">{{$row->comment}}</p>
												<small class="mf-date"><i class="fa fa-clock-o"></i> {{$row->created_at->diffForHumans()}}</small>
												<button class="badge btn-light badge-pill reply-btn" id="replies-{{$row->id}}">Reply</button>
												
													@php
													$reply_cmt=$row->reply_cmt($row->id);
													 @endphp
											@if(count($reply_cmt)>0)
											@foreach($reply_cmt as $rows)
											<div class="media mb-5 mr-5">
											<div class=" mr-5">
												@if($rows->user_type=='admin')<img class="media-object rounded-circle thumb-sm" alt="{{$rows->users->fname}}" src="@if($rows->users->avatar){{url($rows->users->avatar)}}@else {{url('storage/app/public/taleologo.png')}} @endif">
												@else
													<img class="media-object rounded-circle thumb-sm" alt="{{$rows->users->fname}}" src="@if($rows->users->avatar){{url($rows->users->avatar)}}@else {{url('storage/app/public/taleologo.png')}} @endif">
													@endif
											
											</div>
											<div class="media-body">
												<h5 class="mt-0 mb-0">{{$rows->users->fname." ".$rows->users->lname}}</h5>
												<p class="font-13 text-muted mb-0">{{$rows->comment}} </p>
												<small class="mf-date"><i class="fa fa-clock-o"></i> {{$rows->created_at->diffForHumans()}}</small>
												<button class="badge btn-light badge-pill reply-btn" id="replies-{{$rows->id}}">Reply</button>
											</div>
											</div>
											@endforeach
											@endif
										
											</div>
										</div>
										<!-- <div class="media mb-5">
											<div class=" mr-3">
												<a href="#"> <img class="media-object rounded-circle thumb-sm" alt="64x64" src="{{URL::asset('assets/images/users/15.jpg')}}"> </a>
											</div>
											<div class="media-body">
												<h5 class="mt-0 mb-0">Paul Smith</h5>
												<p class="font-13 text-muted mb-0">Very nice ! On the </p>
												<a href=""><span class="badge btn-light badge-pill">Reply</span></a>
											</div>
										</div> -->
										@endforeach
										</div><!--scroll-->
										@else
										<p>No comments</p>
										@endif
									
										<form class="form-horizontal  m-t-20" action="#" method="POST" id="cmt_form">
											<input type="hidden" name="hid_post_id" id="hid_post_id" value="{{$posts->id}}">
											<input type="hidden" name="hid_cmt_id" id="hid_cmt_id" value="">
											<div class="form-group" id="comment_grp">
												<div class="col-xs-12">
													<textarea class="form-control" rows="3" placeholder="Write your comment" id="comment" name="comment"></textarea>
												</div>
											</div>
											<div class="">
												<button type="button" id="submit_cmt" class="btn btn-primary btn-rounded submit-btn  waves-effect waves-light">Submit</button>

												<button type="button" id="reset" class="btn btn-warning btn-rounded reset-btn  waves-effect waves-light float-right">Reset</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<!-- End Row -->